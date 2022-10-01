using System;
using System.Collections.Generic;

namespace QPServer.Model
{
    public partial class Employeetype
    {
        public string Id { get; set; } = null!;
        public string Name { get; set; } = null!;
        public string EmployeeId { get; set; } = null!;

        public virtual Employee Employee { get; set; } = null!;
    }
}
