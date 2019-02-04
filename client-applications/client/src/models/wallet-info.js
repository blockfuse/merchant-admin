export class WalletInfo {
  active_channels_count = '';
  alias = '';
  current_block_hash = '';
  current_block_height = '';
  is_synced_to_chain = '';
  is_testnet = '';
  latest_block_at = '';
  peers_count = '';
  pending_channels_count = '';
  public_key = '';
  type = '';
  version = '';

  constructor(data) {
    Object.assign(this, data);
  }
}
