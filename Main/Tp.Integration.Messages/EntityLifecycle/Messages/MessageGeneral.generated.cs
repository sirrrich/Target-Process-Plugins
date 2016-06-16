// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Messages
{
	[Serializable]
	public class MessageGeneralCreatedMessage : EntityCreatedMessage<MessageGeneralDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class MessageGeneralDeletedMessage : EntityDeletedMessage<MessageGeneralDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class MessageGeneralUpdatedMessage : EntityUpdatedMessage<MessageGeneralDTO, MessageGeneralField>, ISagaMessage
	{
		
	}

}