// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Commands
{
	[Serializable]
	public class CreateTestCaseRunCommand : CreateEntityCommand<TestCaseRunDTO>
	{
		public CreateTestCaseRunCommand(TestCaseRunDTO dto) : base(dto)
		{
		}
	}

	[Serializable]
	public class UpdateTestCaseRunCommand : UpdateEntityCommand<TestCaseRunDTO>
	{
		public UpdateTestCaseRunCommand(TestCaseRunDTO dto) : base(dto)
		{
		}

		public UpdateTestCaseRunCommand(TestCaseRunDTO dto, Enum[] changedFields) : base(dto, changedFields)
		{
		}
	}

	[Serializable]
	public class DeleteTestCaseRunCommand : DeleteEntityCommand<TestCaseRunDTO>
	{
		public DeleteTestCaseRunCommand(int id) : base(id)
		{
		}
	}

}