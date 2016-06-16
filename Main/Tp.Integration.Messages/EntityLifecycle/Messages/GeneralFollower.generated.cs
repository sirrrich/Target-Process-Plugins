// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Messages
{
	[Serializable]
	public class GeneralFollowerCreatedMessage : EntityCreatedMessage<GeneralFollowerDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class GeneralFollowerDeletedMessage : EntityDeletedMessage<GeneralFollowerDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class GeneralFollowerUpdatedMessage : EntityUpdatedMessage<GeneralFollowerDTO, GeneralFollowerField>, ISagaMessage
	{
		
	}

}