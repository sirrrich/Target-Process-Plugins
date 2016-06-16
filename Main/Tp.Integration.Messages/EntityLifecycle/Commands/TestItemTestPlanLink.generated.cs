// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Commands
{
	[Serializable]
	public class CreateTestItemTestPlanLinkCommand : CreateEntityCommand<TestItemTestPlanLinkDTO>
	{
		public CreateTestItemTestPlanLinkCommand(TestItemTestPlanLinkDTO dto) : base(dto)
		{
		}
	}

	[Serializable]
	public class UpdateTestItemTestPlanLinkCommand : UpdateEntityCommand<TestItemTestPlanLinkDTO>
	{
		public UpdateTestItemTestPlanLinkCommand(TestItemTestPlanLinkDTO dto) : base(dto)
		{
		}

		public UpdateTestItemTestPlanLinkCommand(TestItemTestPlanLinkDTO dto, Enum[] changedFields) : base(dto, changedFields)
		{
		}
	}

	[Serializable]
	public class DeleteTestItemTestPlanLinkCommand : DeleteEntityCommand<TestItemTestPlanLinkDTO>
	{
		public DeleteTestItemTestPlanLinkCommand(int id) : base(id)
		{
		}
	}

}