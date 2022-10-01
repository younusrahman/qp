using System;
using System.Collections.Generic;

namespace QPServer.Model
{
    public partial class Customerorder
    {
        public Customerorder()
        {
            Products = new HashSet<Product>();
        }

        public string Id { get; set; } = null!;
        public string? CustomerOrdercol { get; set; }
        public string CustomerId { get; set; } = null!;
        public string PaymentStatusId { get; set; } = null!;
        public string DeliveryTypeId { get; set; } = null!;
        public string EmployeeId { get; set; } = null!;
        public string DeliveryStatusId { get; set; } = null!;
        public string PaymentTypeId { get; set; } = null!;
        public string DeliverySupplierId { get; set; } = null!;
        public string EmployeeId1 { get; set; } = null!;

        public virtual Customer Customer { get; set; } = null!;
        public virtual Deliverystatus DeliveryStatus { get; set; } = null!;
        public virtual Deliverysupplier DeliverySupplier { get; set; } = null!;
        public virtual Deliverytype DeliveryType { get; set; } = null!;
        public virtual Employee EmployeeId1Navigation { get; set; } = null!;
        public virtual Paymentstatus PaymentStatus { get; set; } = null!;
        public virtual Paymenttype PaymentType { get; set; } = null!;

        public virtual ICollection<Product> Products { get; set; }
    }
}
