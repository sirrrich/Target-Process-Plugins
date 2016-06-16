// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Commands
{
	[Serializable]
	public class CreateBuildCommand : CreateEntityCommand<BuildDTO>
	{
		public CreateBuildCommand(BuildDTO dto) : base(dto)
		{
		}
	}

	[Serializable]
	public class UpdateBuildCommand : UpdateEntityCommand<BuildDTO>
	{
		public UpdateBuildCommand(BuildDTO dto) : base(dto)
		{
		}

		public UpdateBuildCommand(BuildDTO dto, Enum[] changedFields) : base(dto, changedFields)
		{
		}
	}

	[Serializable]
	public class DeleteBuildCommand : DeleteEntityCommand<BuildDTO>
	{
		public DeleteBuildCommand(int id) : base(id)
		{
		}
	}

}