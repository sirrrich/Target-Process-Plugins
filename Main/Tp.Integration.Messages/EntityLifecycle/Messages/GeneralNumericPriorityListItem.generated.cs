// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Messages
{
	[Serializable]
	public class GeneralNumericPriorityListItemCreatedMessage : EntityCreatedMessage<GeneralNumericPriorityListItemDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class GeneralNumericPriorityListItemDeletedMessage : EntityDeletedMessage<GeneralNumericPriorityListItemDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class GeneralNumericPriorityListItemUpdatedMessage : EntityUpdatedMessage<GeneralNumericPriorityListItemDTO, GeneralNumericPriorityListItemField>, ISagaMessage
	{
		
	}

}
