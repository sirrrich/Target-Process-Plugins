// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Messages
{
	[Serializable]
	public class SquadProjectAllocationCreatedMessage : EntityCreatedMessage<SquadProjectAllocationDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class SquadProjectAllocationDeletedMessage : EntityDeletedMessage<SquadProjectAllocationDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class SquadProjectAllocationUpdatedMessage : EntityUpdatedMessage<SquadProjectAllocationDTO, SquadProjectAllocationField>, ISagaMessage
	{
		
	}

}