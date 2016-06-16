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
	public partial interface IRevisionFileDTO : IDataTransferObject
	{
		String FileName { get; set; }
		FileActionEnum? FileAction { get; set; }
		int? RevisionID { get; set; }
	}

	[Serializable]
	[DataContract]
	public partial class RevisionFileDTO : DataTransferObject, IRevisionFileDTO
	{
		[PrimaryKey]
		public override int? ID
		{
			get { return RevisionFileID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				RevisionFileID = value;
			}
		}
		[PrimaryKey]
		[DataMember]
		[XmlElement(Order=3)]
		public Int32? RevisionFileID { get; set; }

		
		[DataMember]
		[XmlElement(Order=4)]
		public String FileName { get; set; }

		
		[DataMember]
		[XmlElement(Order=5)]
		public FileActionEnum? FileAction { get; set; }

		[ForeignKey]
		[DataMember]
		[XmlElement(Order=6)]
		public int? RevisionID { get; set; }
	}

	public enum RevisionFileField
	{
		FileName,
		FileAction,
		RevisionID,
	}
}