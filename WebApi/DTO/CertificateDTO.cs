using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class CertificateDTO
    {
        public int Certificates_Code { get; set; }
        public Nullable<int> Certificate_Issuer_Code { get; set; }
        public int Mark_Passes_For_Certificates { get; set; }
        public string Certificate_Template { get; set; }
        public System.DateTime Update_Date { get; set; }
        public System.DateTime Add_Date { get; set; }
    }
}
