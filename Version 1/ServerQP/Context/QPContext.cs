using Microsoft.EntityFrameworkCore;
using ServerQP.Model;

namespace ServerQP.Context
{

    public class QPContext : DbContext
    {

        public QPContext(DbContextOptions<QPContext> opt) : base(opt)
        {

        }
        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<CustomerOrder>()
        //        .HasOne(d => d.DeliveryDetails).WithOne(c => c.CustomerOrder)
        //        .HasForeignKey<DeliveryDetails>(e => e.CustomerId);



        //}


        public DbSet<Employee>? EmployeesList { get; set; }
        public DbSet<Product>? ProductsList { get; set; }
        public DbSet<Categorie>? CategoriesList { get; set; }
        public DbSet<Customer>? Customers { get; set; }
        public DbSet<CustomerOrder>? CustomerOrders { get; set; }
        public DbSet<CustomerPayment>? CustomerPayments { get; set; }
        public DbSet<DeliveryDetails>? DeliveryDetails { get; set; }

        public DbSet<OrderProductDetails>? OrderProductsDetails { get; set; }
        public DbSet<Payment>? Payments { get; set; }

    }




}
