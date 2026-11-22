import type { JSX } from 'react';
import type { PreviewId } from '@/content/home';
import {
  EvergreenMock,
  HalcyonMock,
  KinMock,
  LedgerlineMock,
  NorthpointMock,
  PennantMock,
  RootedMock,
  SummitMock,
  TallyMock,
} from './mocks';

const previews: Record<PreviewId, () => JSX.Element> = {
  evergreen: EvergreenMock,
  halcyon: HalcyonMock,
  ledgerline: LedgerlineMock,
  northpoint: NorthpointMock,
  pennant: PennantMock,
  summit: SummitMock,
  kin: KinMock,
  tally: TallyMock,
  rooted: RootedMock,
};

/** Decorative, scalable mock of a client website's hero. */
export function SitePreview({ id }: { id: PreviewId }) {
  const Mock = previews[id];
  return <Mock />;
}
