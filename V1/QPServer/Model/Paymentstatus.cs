using System;
using System.Collections.Generic;

namespace QPServer.Model
{
    public partial class Paymentstatus
    {
        public Paymentstatus()
        {
            Customerorders = new HashSet<Customerorder>();
        }

        public string Id { get; set; } = null!;
        public string Name { get; set; } = null!;

        public virtual ICollection<Customerorder> Customerorders { get; set; }
    }
}
