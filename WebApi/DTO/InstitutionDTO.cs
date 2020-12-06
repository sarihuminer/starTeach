using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class InstitutionDTO
    {
        public int Institution_Code { get; set; }
        public string Institution_Name { get; set; }
        public string Tel { get; set; }
        public string Mail { get; set; }
        public System.DateTime Update_Date { get; set; }
        public System.DateTime Add_Date { get; set; }
    }
}
