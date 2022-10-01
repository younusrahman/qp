using System;
using System.Collections.Generic;

namespace QPServer.Model
{
    public partial class Customer
    {
        public Customer()
        {
            Customerorders = new HashSet<Customerorder>();
        }

        public string Id { get; set; } = null!;
        public string Firstname { get; set; } = null!;
        public string Lastname { get; set; } = null!;
        public string Address { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Phonenumber { get; set; } = null!;
        public string? Image { get; set; }
        public string City { get; set; } = null!;
        public int PostalCode { get; set; }

        public virtual ICollection<Customerorder> Customerorders { get; set; }
    }
}
