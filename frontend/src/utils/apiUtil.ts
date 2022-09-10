import api from "../services/api";

const ApiUtil = {
  async getSales(query: SalesQuery): Promise<any> {
    try {
      const { data } = await api.get("/sales", {
        params: {
          ...query,
        },
      });

      return data;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  },
  async notifyManager(saleId: number): Promise<void> {
    try {
      await api.get(`/sales/${saleId}/notifyManager`);
    } catch (err) {
      throw new Error((err as Error).message);
    }
  },
};

export default ApiUtil;
