﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using hobby_tracker_web_api.Database;

#nullable disable

namespace hobby_tracker_web_api.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    partial class DatabaseContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.12")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("hobby_tracker_web_api.Database.Entities.Day", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime(6)");

                    b.Property<int>("HabitId")
                        .HasColumnType("int");

                    b.Property<bool>("IsCompleted")
                        .HasColumnType("tinyint(1)");

                    b.HasKey("Id");

                    b.HasIndex("HabitId");

                    b.ToTable("Days");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Date = new DateTime(2022, 9, 28, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            HabitId = 1,
                            IsCompleted = true
                        },
                        new
                        {
                            Id = 2,
                            Date = new DateTime(2022, 10, 29, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            HabitId = 1,
                            IsCompleted = true
                        },
                        new
                        {
                            Id = 3,
                            Date = new DateTime(2022, 9, 30, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            HabitId = 1,
                            IsCompleted = true
                        },
                        new
                        {
                            Id = 4,
                            Date = new DateTime(2022, 10, 27, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            HabitId = 1,
                            IsCompleted = true
                        },
                        new
                        {
                            Id = 5,
                            Date = new DateTime(2022, 9, 26, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            HabitId = 1,
                            IsCompleted = true
                        },
                        new
                        {
                            Id = 6,
                            Date = new DateTime(2022, 10, 25, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            HabitId = 1,
                            IsCompleted = true
                        },
                        new
                        {
                            Id = 7,
                            Date = new DateTime(2022, 10, 28, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            HabitId = 2,
                            IsCompleted = true
                        },
                        new
                        {
                            Id = 8,
                            Date = new DateTime(2022, 9, 29, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            HabitId = 2,
                            IsCompleted = true
                        },
                        new
                        {
                            Id = 9,
                            Date = new DateTime(2022, 10, 30, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            HabitId = 2,
                            IsCompleted = true
                        },
                        new
                        {
                            Id = 10,
                            Date = new DateTime(2022, 9, 27, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            HabitId = 2,
                            IsCompleted = true
                        },
                        new
                        {
                            Id = 11,
                            Date = new DateTime(2022, 10, 26, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            HabitId = 2,
                            IsCompleted = true
                        },
                        new
                        {
                            Id = 12,
                            Date = new DateTime(2022, 9, 25, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            HabitId = 2,
                            IsCompleted = true
                        });
                });

            modelBuilder.Entity("hobby_tracker_web_api.Database.Entities.Habit", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("Achieved")
                        .HasColumnType("int");

                    b.Property<int>("Goal")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Habits");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Achieved = 6,
                            Goal = 10,
                            Name = "React",
                            UserId = 1
                        },
                        new
                        {
                            Id = 2,
                            Achieved = 6,
                            Goal = 8,
                            Name = "Work",
                            UserId = 1
                        });
                });

            modelBuilder.Entity("hobby_tracker_web_api.Database.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("EmailAddress")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<int>("Role")
                        .HasColumnType("int");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.ToTable("Users");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            EmailAddress = "admin",
                            Password = "admin",
                            Role = 1,
                            Username = "admin"
                        });
                });

            modelBuilder.Entity("hobby_tracker_web_api.Database.Entities.Day", b =>
                {
                    b.HasOne("hobby_tracker_web_api.Database.Entities.Habit", "Habit")
                        .WithMany("Days")
                        .HasForeignKey("HabitId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Habit");
                });

            modelBuilder.Entity("hobby_tracker_web_api.Database.Entities.Habit", b =>
                {
                    b.HasOne("hobby_tracker_web_api.Database.User", "User")
                        .WithMany("Habits")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("hobby_tracker_web_api.Database.Entities.Habit", b =>
                {
                    b.Navigation("Days");
                });

            modelBuilder.Entity("hobby_tracker_web_api.Database.User", b =>
                {
                    b.Navigation("Habits");
                });
#pragma warning restore 612, 618
        }
    }
}
