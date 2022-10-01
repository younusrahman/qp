using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace QPServer.Model
{
    public partial class QPDatabaseContext : DbContext
    {
        public QPDatabaseContext()
        {
        }

        public QPDatabaseContext(DbContextOptions<QPDatabaseContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Categorie> Categories { get; set; } = null!;
        public virtual DbSet<Customer> Customers { get; set; } = null!;
        public virtual DbSet<Customerorder> Customerorders { get; set; } = null!;
        public virtual DbSet<Deliverystatus> Deliverystatuses { get; set; } = null!;
        public virtual DbSet<Deliverysupplier> Deliverysuppliers { get; set; } = null!;
        public virtual DbSet<Deliverytype> Deliverytypes { get; set; } = null!;
        public virtual DbSet<Employee> Employees { get; set; } = null!;
        public virtual DbSet<Employeetype> Employeetypes { get; set; } = null!;
        public virtual DbSet<Paymentstatus> Paymentstatuses { get; set; } = null!;
        public virtual DbSet<Paymenttype> Paymenttypes { get; set; } = null!;
        public virtual DbSet<Product> Products { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySql("server=localhost;user=root;database=QPDatabase;password=younus", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.30-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8mb3_general_ci")
                .HasCharSet("utf8mb3");

            modelBuilder.Entity<Categorie>(entity =>
            {
                entity.ToTable("categorie");

                entity.Property(e => e.Id).HasMaxLength(50);

                entity.Property(e => e.Image).HasMaxLength(45);

                entity.Property(e => e.Name).HasMaxLength(45);
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.ToTable("customer");

                entity.Property(e => e.Id).HasMaxLength(50);

                entity.Property(e => e.Address).HasMaxLength(45);

                entity.Property(e => e.City).HasMaxLength(45);

                entity.Property(e => e.Email).HasMaxLength(45);

                entity.Property(e => e.Firstname).HasMaxLength(45);

                entity.Property(e => e.Image).HasMaxLength(45);

                entity.Property(e => e.Lastname).HasMaxLength(45);

                entity.Property(e => e.Phonenumber).HasMaxLength(45);
            });

            modelBuilder.Entity<Customerorder>(entity =>
            {
                entity.HasKey(e => new { e.Id, e.CustomerId, e.PaymentStatusId, e.DeliveryTypeId, e.EmployeeId, e.DeliveryStatusId, e.PaymentTypeId, e.DeliverySupplierId, e.EmployeeId1 })
                    .HasName("PRIMARY")
                    .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0, 0, 0, 0, 0, 0, 0, 0 });

                entity.ToTable("customerorder");

                entity.HasIndex(e => e.CustomerId, "fk_CustomerOrder_Customer_idx");

                entity.HasIndex(e => e.DeliveryStatusId, "fk_CustomerOrder_DeliveryStatus1_idx");

                entity.HasIndex(e => e.DeliverySupplierId, "fk_CustomerOrder_DeliverySupplier1_idx");

                entity.HasIndex(e => e.DeliveryTypeId, "fk_CustomerOrder_DeliveryType1_idx");

                entity.HasIndex(e => e.EmployeeId1, "fk_CustomerOrder_Employee1_idx");

                entity.HasIndex(e => e.PaymentStatusId, "fk_CustomerOrder_PaymentStatus1_idx");

                entity.HasIndex(e => e.PaymentTypeId, "fk_CustomerOrder_PaymentType1_idx");

                entity.Property(e => e.Id).HasMaxLength(45);

                entity.Property(e => e.CustomerId)
                    .HasMaxLength(50)
                    .HasColumnName("Customer_Id");

                entity.Property(e => e.PaymentStatusId)
                    .HasMaxLength(45)
                    .HasColumnName("PaymentStatus_Id");

                entity.Property(e => e.DeliveryTypeId)
                    .HasMaxLength(45)
                    .HasColumnName("DeliveryType_Id");

                entity.Property(e => e.EmployeeId)
                    .HasMaxLength(50)
                    .HasColumnName("Employee_Id");

                entity.Property(e => e.DeliveryStatusId)
                    .HasMaxLength(45)
                    .HasColumnName("DeliveryStatus_Id");

                entity.Property(e => e.PaymentTypeId)
                    .HasMaxLength(45)
                    .HasColumnName("PaymentType_Id");

                entity.Property(e => e.DeliverySupplierId)
                    .HasMaxLength(45)
                    .HasColumnName("DeliverySupplier_Id");

                entity.Property(e => e.EmployeeId1)
                    .HasMaxLength(50)
                    .HasColumnName("Employee_Id1");

                entity.Property(e => e.CustomerOrdercol).HasMaxLength(45);

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Customerorders)
                    .HasForeignKey(d => d.CustomerId)
                    .HasConstraintName("fk_CustomerOrder_Customer");

                entity.HasOne(d => d.DeliveryStatus)
                    .WithMany(p => p.Customerorders)
                    .HasForeignKey(d => d.DeliveryStatusId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_CustomerOrder_DeliveryStatus1");

                entity.HasOne(d => d.DeliverySupplier)
                    .WithMany(p => p.Customerorders)
                    .HasForeignKey(d => d.DeliverySupplierId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_CustomerOrder_DeliverySupplier1");

                entity.HasOne(d => d.DeliveryType)
                    .WithMany(p => p.Customerorders)
                    .HasForeignKey(d => d.DeliveryTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_CustomerOrder_DeliveryType1");

                entity.HasOne(d => d.EmployeeId1Navigation)
                    .WithMany(p => p.Customerorders)
                    .HasForeignKey(d => d.EmployeeId1)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_CustomerOrder_Employee1");

                entity.HasOne(d => d.PaymentStatus)
                    .WithMany(p => p.Customerorders)
                    .HasForeignKey(d => d.PaymentStatusId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_CustomerOrder_PaymentStatus1");

                entity.HasOne(d => d.PaymentType)
                    .WithMany(p => p.Customerorders)
                    .HasForeignKey(d => d.PaymentTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_CustomerOrder_PaymentType1");

                entity.HasMany(d => d.Products)
                    .WithMany(p => p.CustomerOrders)
                    .UsingEntity<Dictionary<string, object>>(
                        "CustomerorderHasProduct1",
                        l => l.HasOne<Product>().WithMany().HasForeignKey("ProductId", "ProductCategorieId").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("fk_CustomerOrder_has_Product1_Product1"),
                        r => r.HasOne<Customerorder>().WithMany().HasForeignKey("CustomerOrderId", "CustomerOrderCustomerId", "CustomerOrderPaymentStatusId", "CustomerOrderDeliveryTypeId", "CustomerOrderEmployeeId", "CustomerOrderDeliveryStatusId", "CustomerOrderPaymentTypeId", "CustomerOrderDeliverySupplierId", "CustomerOrderEmployeeId1").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("fk_CustomerOrder_has_Product1_CustomerOrder1"),
                        j =>
                        {
                            j.HasKey("CustomerOrderId", "CustomerOrderCustomerId", "CustomerOrderPaymentStatusId", "CustomerOrderDeliveryTypeId", "CustomerOrderEmployeeId", "CustomerOrderDeliveryStatusId", "CustomerOrderPaymentTypeId", "CustomerOrderDeliverySupplierId", "CustomerOrderEmployeeId1", "ProductId", "ProductCategorieId").HasName("PRIMARY").HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 });

                            j.ToTable("customerorder_has_product1");

                            j.HasIndex(new[] { "CustomerOrderId", "CustomerOrderCustomerId", "CustomerOrderPaymentStatusId", "CustomerOrderDeliveryTypeId", "CustomerOrderEmployeeId", "CustomerOrderDeliveryStatusId", "CustomerOrderPaymentTypeId", "CustomerOrderDeliverySupplierId", "CustomerOrderEmployeeId1" }, "fk_CustomerOrder_has_Product1_CustomerOrder1_idx");

                            j.HasIndex(new[] { "ProductId", "ProductCategorieId" }, "fk_CustomerOrder_has_Product1_Product1_idx");

                            j.IndexerProperty<string>("CustomerOrderId").HasMaxLength(45).HasColumnName("CustomerOrder_Id");

                            j.IndexerProperty<string>("CustomerOrderCustomerId").HasMaxLength(50).HasColumnName("CustomerOrder_Customer_Id");

                            j.IndexerProperty<string>("CustomerOrderPaymentStatusId").HasMaxLength(45).HasColumnName("CustomerOrder_PaymentStatus_Id");

                            j.IndexerProperty<string>("CustomerOrderDeliveryTypeId").HasMaxLength(45).HasColumnName("CustomerOrder_DeliveryType_Id");

                            j.IndexerProperty<string>("CustomerOrderEmployeeId").HasMaxLength(50).HasColumnName("CustomerOrder_Employee_Id");

                            j.IndexerProperty<string>("CustomerOrderDeliveryStatusId").HasMaxLength(45).HasColumnName("CustomerOrder_DeliveryStatus_Id");

                            j.IndexerProperty<string>("CustomerOrderPaymentTypeId").HasMaxLength(45).HasColumnName("CustomerOrder_PaymentType_Id");

                            j.IndexerProperty<string>("CustomerOrderDeliverySupplierId").HasMaxLength(45).HasColumnName("CustomerOrder_DeliverySupplier_Id");

                            j.IndexerProperty<string>("CustomerOrderEmployeeId1").HasMaxLength(50).HasColumnName("CustomerOrder_Employee_Id1");

                            j.IndexerProperty<string>("ProductId").HasMaxLength(45).HasColumnName("Product_Id");

                            j.IndexerProperty<string>("ProductCategorieId").HasMaxLength(50).HasColumnName("Product_Categorie_Id");
                        });
            });

            modelBuilder.Entity<Deliverystatus>(entity =>
            {
                entity.ToTable("deliverystatus");

                entity.Property(e => e.Id).HasMaxLength(45);

                entity.Property(e => e.Name).HasMaxLength(45);
            });

            modelBuilder.Entity<Deliverysupplier>(entity =>
            {
                entity.ToTable("deliverysupplier");

                entity.Property(e => e.Id).HasMaxLength(45);

                entity.Property(e => e.Name).HasMaxLength(45);
            });

            modelBuilder.Entity<Deliverytype>(entity =>
            {
                entity.ToTable("deliverytype");

                entity.Property(e => e.Id).HasMaxLength(45);

                entity.Property(e => e.Name).HasMaxLength(45);
            });

            modelBuilder.Entity<Employee>(entity =>
            {
                entity.ToTable("employee");

                entity.Property(e => e.Id).HasMaxLength(50);

                entity.Property(e => e.Adress).HasMaxLength(45);

                entity.Property(e => e.City).HasMaxLength(45);

                entity.Property(e => e.DateEmployed).HasMaxLength(45);

                entity.Property(e => e.Email).HasMaxLength(45);

                entity.Property(e => e.EmployeeType).HasMaxLength(45);

                entity.Property(e => e.Firstname).HasMaxLength(45);

                entity.Property(e => e.Image)
                    .HasMaxLength(45)
                    .HasColumnName("image");

                entity.Property(e => e.Lastname).HasMaxLength(45);

                entity.Property(e => e.Phonenuumber).HasMaxLength(45);

                entity.Property(e => e.Salary).HasMaxLength(45);
            });

            modelBuilder.Entity<Employeetype>(entity =>
            {
                entity.HasKey(e => new { e.Id, e.EmployeeId })
                    .HasName("PRIMARY")
                    .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0 });

                entity.ToTable("employeetype");

                entity.HasIndex(e => e.EmployeeId, "fk_EmployeeType_Employee1_idx");

                entity.Property(e => e.Id).HasMaxLength(45);

                entity.Property(e => e.EmployeeId)
                    .HasMaxLength(50)
                    .HasColumnName("Employee_Id");

                entity.Property(e => e.Name).HasMaxLength(45);

                entity.HasOne(d => d.Employee)
                    .WithMany(p => p.Employeetypes)
                    .HasForeignKey(d => d.EmployeeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_EmployeeType_Employee1");
            });

            modelBuilder.Entity<Paymentstatus>(entity =>
            {
                entity.ToTable("paymentstatus");

                entity.Property(e => e.Id).HasMaxLength(45);

                entity.Property(e => e.Name).HasMaxLength(45);
            });

            modelBuilder.Entity<Paymenttype>(entity =>
            {
                entity.ToTable("paymenttype");

                entity.Property(e => e.Id).HasMaxLength(45);

                entity.Property(e => e.Name).HasMaxLength(45);
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.HasKey(e => new { e.Id, e.CategorieId })
                    .HasName("PRIMARY")
                    .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0 });

                entity.ToTable("product");

                entity.HasIndex(e => e.CategorieId, "fk_Product_Categorie1_idx");

                entity.Property(e => e.Id).HasMaxLength(45);

                entity.Property(e => e.CategorieId)
                    .HasMaxLength(50)
                    .HasColumnName("Categorie_Id");

                entity.Property(e => e.Color).HasMaxLength(45);

                entity.Property(e => e.Description).HasMaxLength(45);

                entity.Property(e => e.Image).HasMaxLength(45);

                entity.Property(e => e.Name).HasMaxLength(45);

                entity.Property(e => e.Size).HasMaxLength(45);

                entity.HasOne(d => d.Categorie)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.CategorieId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Product_Categorie1");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
