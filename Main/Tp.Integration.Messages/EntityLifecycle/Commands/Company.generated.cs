// 
// THIS FILE IS AUTOGENERATED! ANY MANUAL MODIFICATIONS WILL BE LOST!
//

using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Commands
{
	[Serializable]
	public class CreateCompanyCommand : CreateEntityCommand<CompanyDTO>
	{
		public CreateCompanyCommand(CompanyDTO dto) : base(dto)
		{
		}
	}

	[Serializable]
	public class UpdateCompanyCommand : UpdateEntityCommand<CompanyDTO>
	{
		public UpdateCompanyCommand(CompanyDTO dto) : base(dto)
		{
		}

		public UpdateCompanyCommand(CompanyDTO dto, Enum[] changedFields) : base(dto, changedFields)
		{
		}
	}

	[Serializable]
	public class DeleteCompanyCommand : DeleteEntityCommand<CompanyDTO>
	{
		public DeleteCompanyCommand(int id) : base(id)
		{
		}
	}

}
