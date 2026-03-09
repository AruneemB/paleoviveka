import mongoose, { Schema, Document } from 'mongoose';

export interface IDiscovery extends Document {
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

const DiscoverySchema = new Schema<IDiscovery>({
  title:       { type: String, required: true },
  url:         { type: String, required: true, unique: true },
  source:      { type: String, required: true },
  publishedAt: { type: Date, required: true },
  rawText:     { type: String, default: '' },
  abstract:    { type: String, default: '' },
  aiSummary:   { type: String, default: null },
  tags:        { type: [String], default: [] },
  isTrending:  { type: Boolean, default: false },
  imageUrl:    { type: String, default: null },
  createdAt:   { type: Date, default: Date.now },
});

DiscoverySchema.index({ url: 1 }, { unique: true });

export default mongoose.models.Discovery ||
  mongoose.model<IDiscovery>('Discovery', DiscoverySchema);
