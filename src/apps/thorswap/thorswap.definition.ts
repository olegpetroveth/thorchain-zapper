import { Register } from '~app-toolkit/decorators';
import { appDefinition, AppDefinition } from '~app/app.definition';
import { AppAction, AppTag, GroupType } from '~app/app.interface';
import { Network } from '~types/network.interface';

export const THORSWAP_DEFINITION = appDefinition({
  id: 'thorswap',
  name: 'THORSwap',
  description: "THORSwap is a multi-chain DEX aggregator built on THORChain's cross-chain liquidity protocol.",
  url: 'https://app.thorswap.finance',
  groups: {
    vthor: {
      id: 'vthor',
      type: GroupType.TOKEN,
      label: 'vThor',
    },
  },
  tags: [AppTag.CROSS_CHAIN, AppTag.DECENTRALIZED_EXCHANGE, AppTag.LIQUIDITY_POOL],
  keywords: [],
  links: {
    github: 'https://github.com/thorswap',
    twitter: 'https://twitter.com/THORSwap',
    discord: 'https://discord.gg/thorswap',
    medium: 'https://thorswap.medium.com/',
  },
  supportedNetworks: {
    [Network.ETHEREUM_MAINNET]: [AppAction.VIEW],
  },
  primaryColor: '#007aff',
});

@Register.AppDefinition(THORSWAP_DEFINITION.id)
export class ThorswapAppDefinition extends AppDefinition {
  constructor() {
    super(THORSWAP_DEFINITION);
  }
}

export default THORSWAP_DEFINITION;
