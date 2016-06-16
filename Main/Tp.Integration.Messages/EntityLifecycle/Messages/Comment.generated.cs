// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Messages
{
	[Serializable]
	public class CommentCreatedMessage : EntityCreatedMessage<CommentDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class CommentDeletedMessage : EntityDeletedMessage<CommentDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class CommentUpdatedMessage : EntityUpdatedMessage<CommentDTO, CommentField>, ISagaMessage
	{
		
	}

}
