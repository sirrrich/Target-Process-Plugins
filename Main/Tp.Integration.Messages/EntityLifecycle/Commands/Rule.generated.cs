// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Commands
{
	[Serializable]
	public class CreateRuleCommand : CreateEntityCommand<RuleDTO>
	{
		public CreateRuleCommand(RuleDTO dto) : base(dto)
		{
		}
	}

	[Serializable]
	public class UpdateRuleCommand : UpdateEntityCommand<RuleDTO>
	{
		public UpdateRuleCommand(RuleDTO dto) : base(dto)
		{
		}

		public UpdateRuleCommand(RuleDTO dto, Enum[] changedFields) : base(dto, changedFields)
		{
		}
	}

	[Serializable]
	public class DeleteRuleCommand : DeleteEntityCommand<RuleDTO>
	{
		public DeleteRuleCommand(int id) : base(id)
		{
		}
	}

}
