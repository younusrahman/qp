using System;
using System.Collections.Generic;

namespace QPServer.Model
{
    public partial class Employee
    {
        public Employee()
        {
            Customerorders = new HashSet<Customerorder>();
            Employeetypes = new HashSet<Employeetype>();
        }

        public string Id { get; set; } = null!;
        public string Firstname { get; set; } = null!;
        public string Lastname { get; set; } = null!;
        public string Adress { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Phonenuumber { get; set; } = null!;
        public string Salary { get; set; } = null!;
        public string DateEmployed { get; set; } = null!;
        public string EmployeeType { get; set; } = null!;
        public string? Image { get; set; }
        public int PostalCode { get; set; }
        public string City { get; set; } = null!;

        public virtual ICollection<Customerorder> Customerorders { get; set; }
        public virtual ICollection<Employeetype> Employeetypes { get; set; }
    }
}
