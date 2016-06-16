// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Commands
{
	[Serializable]
	public class CreatePluginProfileMessageCommand : CreateEntityCommand<PluginProfileMessageDTO>
	{
		public CreatePluginProfileMessageCommand(PluginProfileMessageDTO dto) : base(dto)
		{
		}
	}

	[Serializable]
	public class UpdatePluginProfileMessageCommand : UpdateEntityCommand<PluginProfileMessageDTO>
	{
		public UpdatePluginProfileMessageCommand(PluginProfileMessageDTO dto) : base(dto)
		{
		}

		public UpdatePluginProfileMessageCommand(PluginProfileMessageDTO dto, Enum[] changedFields) : base(dto, changedFields)
		{
		}
	}

	[Serializable]
	public class DeletePluginProfileMessageCommand : DeleteEntityCommand<PluginProfileMessageDTO>
	{
		public DeletePluginProfileMessageCommand(int id) : base(id)
		{
		}
	}

}
