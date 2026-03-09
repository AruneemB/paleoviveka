import { Types } from 'mongoose';

// ─── Domain Models ───────────────────────────────────────

export interface IDiscovery {
  _id: string;
  title: string;
  url: string;
  source: string;
  publishedAt: Date;
  rawText: string;
  abstract: string;
  aiSummary: string | null;
  tags: string[];
  isTrending: boolean;
  imageUrl: string | null;
  createdAt: Date;
}

export interface IMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface IConversation {
  _id: string;
  discoveryId: Types.ObjectId;
  messages: IMessage[];
  createdAt: Date;
  updatedAt: Date;
}

// ─── API Response Shapes ─────────────────────────────────

/** GET /api/discoveries */
export interface DiscoveriesResponse {
  data: IDiscovery[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

/** POST /api/discoveries/:id/summary */
export interface SummaryResponse {
  summary: string;
  cached: boolean;
}

/** POST /api/discoveries/:id/chat */
export interface ChatResponse {
  reply: string;
  conversationId: string;
}

/** POST /api/ingest */
export interface IngestResponse {
  success: boolean;
  inserted: number;
}

/** Error response */
export interface ErrorResponse {
  error: string;
}
