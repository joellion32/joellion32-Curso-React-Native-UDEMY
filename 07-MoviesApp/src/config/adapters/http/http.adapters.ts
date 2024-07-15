// utilizar el patron de diseño adapter por si cambian las librerias a utilizar poder cambiarlas de una forma mas facil
export abstract class HttpAdapter {
    abstract get<T>(url: string, options?: Record<string, unknown>): Promise<T>;
}