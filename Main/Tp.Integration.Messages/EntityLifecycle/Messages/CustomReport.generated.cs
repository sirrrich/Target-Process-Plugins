// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Messages
{
	[Serializable]
	public class CustomReportCreatedMessage : EntityCreatedMessage<CustomReportDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class CustomReportDeletedMessage : EntityDeletedMessage<CustomReportDTO>, ISagaMessage
	{
	}

	[Serializable]
	public class CustomReportUpdatedMessage : EntityUpdatedMessage<CustomReportDTO, CustomReportField>, ISagaMessage
	{
		
	}

}
