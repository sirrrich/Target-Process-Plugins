// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Messages
{
	[Serializable]
	public class ApplicationContextDataCreatedMessage : EntityCreatedMessage<ApplicationContextDataDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class ApplicationContextDataDeletedMessage : EntityDeletedMessage<ApplicationContextDataDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class ApplicationContextDataUpdatedMessage : EntityUpdatedMessage<ApplicationContextDataDTO, ApplicationContextDataField>, ISagaMessage
	{
		
	}

}