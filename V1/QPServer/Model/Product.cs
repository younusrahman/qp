using System;
using System.Collections.Generic;

namespace QPServer.Model
{
    public partial class Product
    {
        public Product()
        {
            CustomerOrders = new HashSet<Customerorder>();
        }

        public string Id { get; set; } = null!;
        public string Name { get; set; } = null!;
        public string Description { get; set; } = null!;
        public string Size { get; set; } = null!;
        public string Color { get; set; } = null!;
        public int Stock { get; set; }
        public string CategorieId { get; set; } = null!;
        public string? Image { get; set; }

        public virtual Categorie Categorie { get; set; } = null!;

        public virtual ICollection<Customerorder> CustomerOrders { get; set; }
    }
}
