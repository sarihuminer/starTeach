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
    
    public partial class Student
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Student()
        {
            this.Exams_For_Students = new HashSet<Exams_For_Students>();
            this.Student_Grade_Score = new HashSet<Student_Grade_Score>();
            this.Tests_For_Student = new HashSet<Tests_For_Student>();
        }

    //codeMosad: number;
        public int Serial_Num { get; set; }
        public int ID_Student { get; set; }
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public string Tel { get; set; }
        public string Mail { get; set; }
        public string Password { get; set; }
        public Nullable<int> Class_Code { get; set; }
        public Nullable<int> City_Code { get; set; }
        public System.DateTime Update_Date { get; set; }
        public System.DateTime Add_Date { get; set; }
    
        public virtual City City { get; set; }
        public virtual Class Class { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Exams_For_Students> Exams_For_Students { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Student_Grade_Score> Student_Grade_Score { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Tests_For_Student> Tests_For_Student { get; set; }
    }
}
