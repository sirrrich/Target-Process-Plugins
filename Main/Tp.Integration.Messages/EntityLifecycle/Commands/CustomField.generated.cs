// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Commands
{
	[Serializable]
	public class CreateCustomFieldCommand : CreateEntityCommand<CustomFieldDTO>
	{
		public CreateCustomFieldCommand(CustomFieldDTO dto) : base(dto)
		{
		}
	}

	[Serializable]
	public class UpdateCustomFieldCommand : UpdateEntityCommand<CustomFieldDTO>
	{
		public UpdateCustomFieldCommand(CustomFieldDTO dto) : base(dto)
		{
		}

		public UpdateCustomFieldCommand(CustomFieldDTO dto, Enum[] changedFields) : base(dto, changedFields)
		{
		}
	}

	[Serializable]
	public class DeleteCustomFieldCommand : DeleteEntityCommand<CustomFieldDTO>
	{
		public DeleteCustomFieldCommand(int id) : base(id)
		{
		}
	}

}
