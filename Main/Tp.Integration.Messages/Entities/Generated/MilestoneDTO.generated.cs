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
	public partial interface IMilestoneDTO : IDataTransferObject
	{
		String Name { get; set; }
		String Description { get; set; }
		DateTime Date { get; set; }
		String CssClass { get; set; }
		int? OwnerID { get; set; }
	}

	[Serializable]
	[DataContract]
	public partial class MilestoneDTO : DataTransferObject, IMilestoneDTO
	{
		[PrimaryKey]
		public override int? ID
		{
			get { return MilestoneId; }
			set
			{
				if (value == int.MinValue)
					value = null;

				MilestoneId = value;
			}
		}
		[PrimaryKey]
		[DataMember]
		[XmlElement(Order=3)]
		public Int32? MilestoneId { get; set; }

		
		[DataMember]
		[XmlElement(Order=4)]
		public String Name { get; set; }

		
		[DataMember]
		[XmlElement(Order=5)]
		public String Description { get; set; }

		
		[DataMember]
		[XmlElement(Order=6)]
		public DateTime Date { get; set; }

		
		[DataMember]
		[XmlElement(Order=7)]
		public String CssClass { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=8)]
		public int? OwnerID { get; set; }
	}

	public enum MilestoneField
	{
		Name,
		Description,
		Date,
		CssClass,
		OwnerID,
	}
}
