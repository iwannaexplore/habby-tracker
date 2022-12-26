using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace hobby_tracker_web_api.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Username = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Password = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    EmailAddress = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Role = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Habits",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Goal = table.Column<int>(type: "int", nullable: false),
                    Achieved = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Habits", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Habits_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Days",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    IsCompleted = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    Date = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    HabitId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Days", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Days_Habits_HabitId",
                        column: x => x.HabitId,
                        principalTable: "Habits",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "EmailAddress", "Password", "Role", "Username" },
                values: new object[] { 1, "admin", "admin", 1, "admin" });

            migrationBuilder.InsertData(
                table: "Habits",
                columns: new[] { "Id", "Achieved", "Goal", "Name", "UserId" },
                values: new object[] { 1, 6, 10, "React", 1 });

            migrationBuilder.InsertData(
                table: "Habits",
                columns: new[] { "Id", "Achieved", "Goal", "Name", "UserId" },
                values: new object[] { 2, 6, 8, "Work", 1 });

            migrationBuilder.InsertData(
                table: "Days",
                columns: new[] { "Id", "Date", "HabitId", "IsCompleted" },
                values: new object[,]
                {
                    { 1, new DateTime(2022, 9, 28, 0, 0, 0, 0, DateTimeKind.Unspecified), 1, true },
                    { 2, new DateTime(2022, 10, 29, 0, 0, 0, 0, DateTimeKind.Unspecified), 1, true },
                    { 3, new DateTime(2022, 9, 30, 0, 0, 0, 0, DateTimeKind.Unspecified), 1, true },
                    { 4, new DateTime(2022, 10, 27, 0, 0, 0, 0, DateTimeKind.Unspecified), 1, true },
                    { 5, new DateTime(2022, 9, 26, 0, 0, 0, 0, DateTimeKind.Unspecified), 1, true },
                    { 6, new DateTime(2022, 10, 25, 0, 0, 0, 0, DateTimeKind.Unspecified), 1, true },
                    { 7, new DateTime(2022, 10, 28, 0, 0, 0, 0, DateTimeKind.Unspecified), 2, true },
                    { 8, new DateTime(2022, 9, 29, 0, 0, 0, 0, DateTimeKind.Unspecified), 2, true },
                    { 9, new DateTime(2022, 10, 30, 0, 0, 0, 0, DateTimeKind.Unspecified), 2, true },
                    { 10, new DateTime(2022, 9, 27, 0, 0, 0, 0, DateTimeKind.Unspecified), 2, true },
                    { 11, new DateTime(2022, 10, 26, 0, 0, 0, 0, DateTimeKind.Unspecified), 2, true },
                    { 12, new DateTime(2022, 9, 25, 0, 0, 0, 0, DateTimeKind.Unspecified), 2, true }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Days_HabitId",
                table: "Days",
                column: "HabitId");

            migrationBuilder.CreateIndex(
                name: "IX_Habits_UserId",
                table: "Habits",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Days");

            migrationBuilder.DropTable(
                name: "Habits");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
