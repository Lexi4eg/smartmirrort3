"use client";

import { type EdgeStoreRouter } from "../../api/edgestore/edgestore-router";
import { createEdgeStoreProvider } from "../../api/edgestore/edgestore-provider";

export const { EdgeStoreProvider, useEdgeStore } =
    createEdgeStoreProvider<EdgeStoreRouter>({
        maxConcurrentUploads: 2,
    });