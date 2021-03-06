// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Messages
{
	[Serializable]
	public class SquadIterationCreatedMessage : EntityCreatedMessage<SquadIterationDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class SquadIterationDeletedMessage : EntityDeletedMessage<SquadIterationDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class SquadIterationUpdatedMessage : EntityUpdatedMessage<SquadIterationDTO, SquadIterationField>, ISagaMessage
	{
		
	}

}
