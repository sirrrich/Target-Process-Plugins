// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Messages
{
	[Serializable]
	public class FeatureCreatedMessage : EntityCreatedMessage<FeatureDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class FeatureDeletedMessage : EntityDeletedMessage<FeatureDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class FeatureUpdatedMessage : EntityUpdatedMessage<FeatureDTO, FeatureField>, ISagaMessage
	{
		
	}

}
