// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Commands
{
	[Serializable]
	public class CreateTestStepRunCommand : CreateEntityCommand<TestStepRunDTO>
	{
		public CreateTestStepRunCommand(TestStepRunDTO dto) : base(dto)
		{
		}
	}

	[Serializable]
	public class UpdateTestStepRunCommand : UpdateEntityCommand<TestStepRunDTO>
	{
		public UpdateTestStepRunCommand(TestStepRunDTO dto) : base(dto)
		{
		}

		public UpdateTestStepRunCommand(TestStepRunDTO dto, Enum[] changedFields) : base(dto, changedFields)
		{
		}
	}

	[Serializable]
	public class DeleteTestStepRunCommand : DeleteEntityCommand<TestStepRunDTO>
	{
		public DeleteTestStepRunCommand(int id) : base(id)
		{
		}
	}

}
