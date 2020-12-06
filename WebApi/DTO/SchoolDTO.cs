using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
  public  class SchoolDTO
    {
        public int Code_School { get; set; }
        public string Name_School { get; set; }
        public Nullable<int> Area_Code { get; set; }
        public System.DateTime Update_Date { get; set; }
        public System.DateTime Add_Date { get; set; }
    }
}
