using System;
using System.Collections.Generic;

namespace QPServer.Model
{
    public partial class Categorie
    {
        public Categorie()
        {
            Products = new HashSet<Product>();
        }

        public string Id { get; set; } = null!;
        public string Name { get; set; } = null!;
        public string? Image { get; set; }

        public virtual ICollection<Product> Products { get; set; }
    }
}
