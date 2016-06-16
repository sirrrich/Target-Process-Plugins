// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Messages
{
	[Serializable]
	public class AttachmentFileCreatedMessage : EntityCreatedMessage<AttachmentFileDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class AttachmentFileDeletedMessage : EntityDeletedMessage<AttachmentFileDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class AttachmentFileUpdatedMessage : EntityUpdatedMessage<AttachmentFileDTO, AttachmentFileField>, ISagaMessage
	{
		
	}

}