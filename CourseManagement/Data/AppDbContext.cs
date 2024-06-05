using CourseManagement.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Emit;

namespace CourseManagement.Data
{
    public class AppDbContext : IdentityDbContext<AppUser>
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Setting> Settings { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Category>().HasQueryFilter(m => !m.SoftDeleted);

            modelBuilder.Entity<Product>().HasQueryFilter(m => !m.SoftDeleted);

            ModelBuilder modelBuilder1 = modelBuilder.Entity<Course>(entity =>
            {
                entity.Property(e => e.Price).HasColumnType("decimal(18,2)");
            });

        }

    }

}
