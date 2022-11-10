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
                name: "Habits",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Goal = table.Column<int>(type: "int", nullable: false),
                    Achieved = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Habits", x => x.Id);
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
                table: "Habits",
                columns: new[] { "Id", "Achieved", "Goal", "Name" },
                values: new object[] { 1, 6, 10, "React" });

            migrationBuilder.InsertData(
                table: "Habits",
                columns: new[] { "Id", "Achieved", "Goal", "Name" },
                values: new object[] { 2, 6, 8, "React" });

            migrationBuilder.InsertData(
                table: "Days",
                columns: new[] { "Id", "Date", "HabitId", "IsCompleted" },
                values: new object[,]
                {
                    { 1, new DateTime(2022, 9, 28, 0, 0, 0, 0, DateTimeKind.Unspecified), 1, false },
                    { 2, new DateTime(2022, 10, 29, 0, 0, 0, 0, DateTimeKind.Unspecified), 1, false },
                    { 3, new DateTime(2022, 9, 30, 0, 0, 0, 0, DateTimeKind.Unspecified), 1, false },
                    { 4, new DateTime(2022, 10, 27, 0, 0, 0, 0, DateTimeKind.Unspecified), 1, false },
                    { 5, new DateTime(2022, 9, 26, 0, 0, 0, 0, DateTimeKind.Unspecified), 1, false },
                    { 6, new DateTime(2022, 10, 25, 0, 0, 0, 0, DateTimeKind.Unspecified), 1, false },
                    { 7, new DateTime(2022, 10, 28, 0, 0, 0, 0, DateTimeKind.Unspecified), 2, false },
                    { 8, new DateTime(2022, 9, 29, 0, 0, 0, 0, DateTimeKind.Unspecified), 2, false },
                    { 9, new DateTime(2022, 10, 30, 0, 0, 0, 0, DateTimeKind.Unspecified), 2, false },
                    { 10, new DateTime(2022, 9, 27, 0, 0, 0, 0, DateTimeKind.Unspecified), 2, false },
                    { 11, new DateTime(2022, 10, 26, 0, 0, 0, 0, DateTimeKind.Unspecified), 2, false },
                    { 12, new DateTime(2022, 9, 25, 0, 0, 0, 0, DateTimeKind.Unspecified), 2, false }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Days_HabitId",
                table: "Days",
                column: "HabitId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Days");

            migrationBuilder.DropTable(
                name: "Habits");
        }
    }
}
