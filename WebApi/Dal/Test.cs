//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Dal
{
    using System;
    using System.Collections.Generic;
    
    public partial class Test
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Test()
        {
            this.Exams_For_Students = new HashSet<Exams_For_Students>();
            this.Tests_For_Student = new HashSet<Tests_For_Student>();
        }
    
        public int Tests_Code { get; set; }
        public string Tests_Name { get; set; }
        public Nullable<int> Code_Subjects_For_Classes { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Exams_For_Students> Exams_For_Students { get; set; }
        public virtual Subjects_For_Classes Subjects_For_Classes { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Tests_For_Student> Tests_For_Student { get; set; }
    }
}
