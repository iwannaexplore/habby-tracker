using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

using hobby_tracker_web_api.Database;
using hobby_tracker_web_api.DTO;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace hobby_tracker_web_api.Controllers;

[Route("[controller]")]
[ApiController]
public class UserController : ControllerBase
{
  private IConfiguration _config;
  private DatabaseContext Context { get; set; }
  // GET
  public UserController(IConfiguration config, DatabaseContext context)
  {
    _config = config;
    Context = context;
  }

  [HttpGet("Admins")]
  [Authorize(Roles = "admin")]
  public IActionResult AdminsEndpoint()
  {
    var currentUser = GetCurrentUser();
    return Ok();
  }

  private User? GetCurrentUser()
  {
    var identity = HttpContext.User.Identity as ClaimsIdentity;
    if (identity != null)
    {
      var userClaims = identity.Claims;

      return new User()
      {
        Username = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.NameIdentifier)?.Value,
        EmailAddress = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Email)?.Value,
        Role = (Roles)int.Parse(userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Role)?.Value), 
      };
    }
    return null;
  }
  //ToDo Fix when change Habit name Archieved number reset to default.
  //Todo Add colors to habits
  //Todo Add user login and logout in React
  [AllowAnonymous]
  [HttpPost("Login")]
  public IActionResult Login([FromBody] UserLogin userLogin)
  {
    var user = Authenticate(userLogin);
    if (user != null)
    {
      var token = Generate(user);
      return Ok(token);
    }
    return NotFound("User is not found");
  }
  [AllowAnonymous]
  [HttpPost("Register")]
  public IActionResult Register([FromBody] UserLogin userLogin)
  {
    var user = Authenticate(userLogin);
    if (user == null)
    {
      user = new User()
        {EmailAddress = userLogin.Email, Password = userLogin.Password, Username = userLogin.Email};
      var token = Generate(user);
      return Ok(token);
    }
    return NotFound("User is not found");
  }
  private string Generate(User user)
  {
    var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
    var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

    var claims = new[]
    {
      new Claim(ClaimTypes.NameIdentifier, user.Username),
      new Claim(ClaimTypes.Email, user.EmailAddress),
      new Claim(ClaimTypes.Role, user.Role.ToString())
    };

    var token = new JwtSecurityToken(_config["Jwt:Issuer"],
      _config["Jwt:Audience"],
      claims, expires: DateTime.Now.AddMinutes(15),
      signingCredentials: credentials);
    return new JwtSecurityTokenHandler().WriteToken(token);
  }
  private User? Authenticate(UserLogin userLogin)
  {
    var currentUser = Context.Users.FirstOrDefault(o =>
      o.Username.ToLower() == userLogin.Email.ToLower() && o.Password == userLogin.Password);
    return currentUser;
  }
}
