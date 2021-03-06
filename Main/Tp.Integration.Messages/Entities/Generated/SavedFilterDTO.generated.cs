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
	public partial interface ISavedFilterDTO : IDataTransferObject
	{
		String Name { get; set; }
		String Description { get; set; }
		String FilterType { get; set; }
		Boolean? IsDefault { get; set; }
		Boolean? IsPublic { get; set; }
		string QueryFilter { get; set; }
		Int32? ProjectID { get; set; }
		int? OwnerID { get; set; }
	}

	[Serializable]
	[DataContract]
	public partial class SavedFilterDTO : DataTransferObject, ISavedFilterDTO
	{
		[PrimaryKey]
		public override int? ID
		{
			get { return SavedFilterID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				SavedFilterID = value;
			}
		}
		[PrimaryKey]
		[DataMember]
		[XmlElement(Order=3)]
		public Int32? SavedFilterID { get; set; }

		
		[DataMember]
		[XmlElement(Order=4)]
		public String Name { get; set; }

		
		[DataMember]
		[XmlElement(Order=5)]
		public String Description { get; set; }

		
		[DataMember]
		[XmlElement(Order=6)]
		public String FilterType { get; set; }

		
		[DataMember]
		[XmlElement(Order=7)]
		public Boolean? IsDefault { get; set; }

		
		[DataMember]
		[XmlElement(Order=8)]
		public Boolean? IsPublic { get; set; }

		
		[DataMember]
		[XmlElement(Order=9)]
		public string QueryFilter { get; set; }

		
		[DataMember]
		[XmlElement(Order=10)]
		public Int32? ProjectID { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=11)]
		public int? OwnerID { get; set; }
	}

	public enum SavedFilterField
	{
		Name,
		Description,
		FilterType,
		IsDefault,
		IsPublic,
		QueryFilter,
		ProjectID,
		OwnerID,
	}
}
