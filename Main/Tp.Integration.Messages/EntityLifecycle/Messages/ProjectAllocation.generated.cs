// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Messages
{
	[Serializable]
	public class ProjectAllocationCreatedMessage : EntityCreatedMessage<ProjectAllocationDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class ProjectAllocationDeletedMessage : EntityDeletedMessage<ProjectAllocationDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class ProjectAllocationUpdatedMessage : EntityUpdatedMessage<ProjectAllocationDTO, ProjectAllocationField>, ISagaMessage
	{
		
	}

}