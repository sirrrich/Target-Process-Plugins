//-----------------------------------------------------------------------------
// This code was generated by a tool.
// Changes to this file will be lost if the code is regenerated.
//-----------------------------------------------------------------------------
using System;
using System.Xml.Serialization;using System.Runtime.Serialization;
using Tp.Integration.Common;

namespace Tp.Integration.Common
{
    /// <summary>
    /// Data Transfer object of Revision File. Represents file that has been commited into source control repository.
    /// </summary>
	[Serializable][DataContract]
	public partial class RevisionFileDTO : DataTransferObject
	{
        /// <summary>
        /// Gets or sets the ID.
        /// </summary>
        /// <value>The ID.</value>		
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

        /// <summary>
        /// Gets or sets the Revision File ID.
        /// </summary>
        /// <value>The Revision File ID.</value>
		[PrimaryKey]
		[DataMember][XmlElement(Order = 3)]public int? RevisionFileID { get; set; }
		

		/// <summary>
        /// Gets or sets the File Name. Name of the file
        /// </summary>
        /// <value>The File Name.</value>
		[DataMember][XmlElement(Order = 4)]public String FileName { get; set; }

		/// <summary>
        /// Gets or sets the File Action. Action on file: None or Add or Delete or Modify or Rename
        /// </summary>
        /// <value>The File Action.</value>
		[DataMember][XmlElement(Order = 5)]public FileActionEnum? FileAction { get; set; }
		
		/// <summary>
        /// Gets or sets the Revision ID. Reference to revision to which file belongs
        /// </summary>
        /// <value>The Revision ID.</value>
		[ForeignKey]
		[DataMember][XmlElement(Order = 6)]public Int32? RevisionID { get; set; }
		

		
	}
	
	
	/// <summary>
    /// Revision File fields
    /// </summary>
	public enum RevisionFileField
	{
        /// <summary>
        /// File Name
        /// </summary>		
		FileName,
        /// <summary>
        /// File Action
        /// </summary>		
		FileAction,
        /// <summary>
        /// Revision ID
        /// </summary>		
		RevisionID,
	}
}
