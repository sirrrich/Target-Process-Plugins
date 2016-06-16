//
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using System.Xml.Serialization;
using System.Runtime.Serialization;
using Tp.Integration.Messages.Entities;
using Tp.Integration.Common;

namespace Tp.Integration.Common
{
	public partial interface ICustomReportDTO : IDataTransferObject
	{
		String Name { get; set; }
		String ReportingEntityName { get; set; }
		Boolean? IsPublic { get; set; }
		string Content { get; set; }
		int? ProcessID { get; set; }
		string ProcessName { get; set; }
		int? OwnerID { get; set; }
	}

	[Serializable]
	[DataContract]
	public partial class CustomReportDTO : DataTransferObject, ICustomReportDTO
	{
		[PrimaryKey]
		public override int? ID
		{
			get { return CustomReportID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				CustomReportID = value;
			}
		}
		[PrimaryKey]
		[DataMember]
		[XmlElement(Order=3)]
		public Int32? CustomReportID { get; set; }

		
		[DataMember]
		[XmlElement(Order=4)]
		public String Name { get; set; }

		
		[DataMember]
		[XmlElement(Order=5)]
		public String ReportingEntityName { get; set; }

		
		[DataMember]
		[XmlElement(Order=6)]
		public Boolean? IsPublic { get; set; }

		
		[DataMember]
		[XmlElement(Order=7)]
		public string Content { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=8)]
		public int? ProcessID { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=9)]
		public int? OwnerID { get; set; }

		[RelationName]
		[DataMember]
		[XmlElement(Order=10)]
		public string ProcessName { get; set; }
	}

	public enum CustomReportField
	{
		Name,
		ReportingEntityName,
		IsPublic,
		Content,
		ProcessID,
		OwnerID,
		ProcessName,
	}
}
