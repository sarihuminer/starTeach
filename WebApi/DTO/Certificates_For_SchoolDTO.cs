using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
 public class Certificates_For_SchoolDTO
    {
        public int Serial_Num { get; set; }
        public Nullable<int> Class_Code { get; set; }
        public Nullable<int> Certificates_Code { get; set; }
        public Nullable<int> Code_School { get; set; }
        public System.DateTime Update_Date { get; set; }
        public System.DateTime Add_Date { get; set; }

    }
}
