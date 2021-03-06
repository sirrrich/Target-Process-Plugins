// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Messages
{
	[Serializable]
	public class TpEventCreatedMessage : EntityCreatedMessage<TpEventDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class TpEventDeletedMessage : EntityDeletedMessage<TpEventDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class TpEventUpdatedMessage : EntityUpdatedMessage<TpEventDTO, TpEventField>, ISagaMessage
	{
		
	}

}
