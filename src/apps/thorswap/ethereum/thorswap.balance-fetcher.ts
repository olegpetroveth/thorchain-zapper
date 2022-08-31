import { Inject } from '@nestjs/common';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { Register } from '~app-toolkit/decorators';
import { presentBalanceFetcherResponse } from '~app-toolkit/helpers/presentation/balance-fetcher-response.present';
import { BalanceFetcher } from '~balance/balance-fetcher.interface';
import { Network } from '~types/network.interface';

import { THORSWAP_DEFINITION } from '../thorswap.definition';

const network = Network.ETHEREUM_MAINNET;

@Register.BalanceFetcher(THORSWAP_DEFINITION.id, network)
export class EthereumThorswapBalanceFetcher implements BalanceFetcher {
  constructor(@Inject(APP_TOOLKIT) private readonly appToolkit: IAppToolkit) {}

  async getBalances(address: string) {
    const vThorBalance = await this.appToolkit.helpers.tokenBalanceHelper.getTokenBalances({
      address,
      appId: THORSWAP_DEFINITION.id,
      groupId: THORSWAP_DEFINITION.groups.vthor.id,
      network,
    });

    return presentBalanceFetcherResponse([
      {
        label: 'vThor',
        assets: vThorBalance,
      },
    ]);
  }
}
